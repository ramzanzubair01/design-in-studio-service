'use client'
import { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'

export default function PortfolioDashboard() {
  // State management
  const [activeTab, setActiveTab] = useState('portfolio')
  const [portfolioItems, setPortfolioItems] = useState([])
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    images: [],
    category: '',
    client: '',
    location: '',
    software: [''],
    dated: new Date().toISOString().split('T')[0]
  })
  const [editingId, setEditingId] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const fileInputRef = useRef(null)
  const modalRef = useRef(null)

  // Load initial data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('/api/get-portfolio')
        if (!response.ok) throw new Error('Failed to load data')
        const data = await response.json()
        setPortfolioItems(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files)
    const newImages = files.map(file => ({
      id: crypto.randomUUID(),
      url: URL.createObjectURL(file),
      file
    }))
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...newImages]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    
    try {
      // Prepare data
      const slug = formData.slug || formData.title.toLowerCase().replace(/\s+/g, '-')
      const dataToSave = {
        ...formData,
        slug,
        images: formData.images.map(img => img.url)
      }

      // Update or add new item
      let updatedItems
      if (editingId) {
        updatedItems = portfolioItems.map(item => 
          item.id === editingId ? { ...dataToSave, id: editingId } : item
        )
      } else {
        const newId = Math.max(...portfolioItems.map(i => i.id), 0) + 1
        updatedItems = [...portfolioItems, { ...dataToSave, id: newId }]
      }

      // Save to JSON
      const response = await fetch('/api/save-portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedItems)
      })

      if (!response.ok) throw new Error('Failed to save data')

      setPortfolioItems(updatedItems)
      setIsModalOpen(false)
      resetForm()
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  // Helper functions
  const editItem = (id) => {
    const item = portfolioItems.find(i => i.id === id)
    if (item) {
      setFormData({
        ...item,
        images: item.images.map(url => ({ id: crypto.randomUUID(), url }))
      })
      setEditingId(id)
      setIsModalOpen(true)
    }
  }

  const deleteItem = async (id) => {
    if (!confirm('Are you sure you want to delete this item?')) return
    
    try {
      setIsLoading(true)
      const updatedItems = portfolioItems.filter(item => item.id !== id)
      await fetch('/api/save-portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedItems)
      })
      setPortfolioItems(updatedItems)
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      description: '',
      images: [],
      category: '',
      client: '',
      location: '',
      software: [''],
      dated: new Date().toISOString().split('T')[0]
    })
    setEditingId(null)
  }

  return (
    <div className="flex h-screen bg-gray-900 text-gray-200">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 border-r border-gray-700 p-4">
        <h1 className="text-xl font-bold mb-6">Portfolio Admin</h1>
        <nav className="space-y-2">
          {['portfolio', 'categories', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                activeTab === tab 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Icon 
                icon={
                  tab === 'portfolio' ? 'mdi:image-multiple' :
                  tab === 'categories' ? 'mdi:tag-multiple' : 'mdi:cog'
                } 
                className="mr-3 text-lg"
              />
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-gray-800 p-4 flex justify-between items-center border-b border-gray-700">
          <h2 className="text-lg font-semibold capitalize">
            {activeTab === 'portfolio' ? 'Projects' : activeTab}
          </h2>
          {activeTab === 'portfolio' && (
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
            >
              <Icon icon="mdi:plus" className="mr-2" />
              Add Project
            </button>
          )}
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-6">
          {activeTab === 'portfolio' && (
            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              {portfolioItems.length === 0 ? (
                <div className="p-8 text-center text-gray-400">
                  <Icon icon="mdi:image-off" className="text-4xl mx-auto mb-4" />
                  <p>No projects found. Add your first project!</p>
                </div>
              ) : (
                <table className="w-full">
                  <thead className="bg-gray-700 text-gray-300">
                    <tr>
                      <th className="p-4 text-left">Project</th>
                      <th className="p-4 text-left">Category</th>
                      <th className="p-4 text-left">Date</th>
                      <th className="p-4 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {portfolioItems.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-750">
                        <td className="p-4">
                          <div className="flex items-center">
                            {item.images?.[0] && (
                              <img 
                                src={item.images[0]} 
                                alt={item.title}
                                className="w-10 h-10 rounded-md object-cover mr-3"
                              />
                            )}
                            <div>
                              <p className="font-medium">{item.title}</p>
                              <p className="text-sm text-gray-400">{item.client}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="inline-block bg-gray-700 px-3 py-1 rounded-full text-sm">
                            {item.category}
                          </span>
                        </td>
                        <td className="p-4 text-gray-400">{item.dated}</td>
                        <td className="p-4">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => editItem(item.id)}
                              className="text-blue-400 hover:text-blue-300 p-2"
                            >
                              <Icon icon="mdi:pencil" />
                            </button>
                            <button
                              onClick={() => deleteItem(item.id)}
                              className="text-red-400 hover:text-red-300 p-2"
                            >
                              <Icon icon="mdi:trash" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center p-4 z-50 overflow-y-auto">
          <div 
            ref={modalRef}
            className="bg-gray-800 rounded-xl border border-gray-700 p-6 w-full max-w-2xl my-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">
                {editingId ? 'Edit Project' : 'Add New Project'}
              </h3>
              <button 
                onClick={() => {
                  setIsModalOpen(false)
                  resetForm()
                }}
                className="text-gray-400 hover:text-white p-1"
              >
                <Icon icon="mdi:close" className="text-2xl" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Title*
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Slug
                  </label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="auto-generated"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Category*
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    name="dated"
                    value={formData.dated}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Images
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  className="hidden"
                  multiple
                  accept="image/*"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mb-3 flex items-center"
                >
                  <Icon icon="mdi:upload" className="mr-2" />
                  Upload Images
                </button>
                <div className="grid grid-cols-3 gap-3">
                  {formData.images.map((image) => (
                    <div key={image.id} className="relative group">
                      <img
                        src={image.url}
                        alt="Preview"
                        className="w-full h-28 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(image.id)}
                        className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Icon icon="mdi:close" className="text-sm" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Software Used
                </label>
                {formData.software.map((item, index) => (
                  <div key={index} className="flex mb-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => handleArrayChange('software', index, e.target.value)}
                      className="flex-1 bg-gray-700 border border-gray-600 rounded-l-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Software name"
                    />
                    <button
                      type="button"
                      onClick={() => removeArrayItem('software', index)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 rounded-r-lg"
                    >
                      <Icon icon="mdi:minus" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem('software')}
                  className="mt-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center"
                >
                  <Icon icon="mdi:plus" className="mr-2" />
                  Add Software
                </button>
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-700">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false)
                    resetForm()
                  }}
                  className="px-6 py-2 rounded-lg text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 flex items-center"
                >
                  {isLoading && (
                    <Icon icon="mdi:loading" className="animate-spin mr-2" />
                  )}
                  {editingId ? 'Update Project' : 'Add Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      {/* Error Notification */}
      {error && (
        <div className="fixed bottom-4 right-4 bg-red-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-start max-w-md z-50">
          <Icon icon="mdi:alert-circle" className="text-xl mr-2 mt-0.5" />
          <div>
            <p className="font-medium">Error</p>
            <p className="text-sm">{error}</p>
          </div>
          <button 
            onClick={() => setError(null)} 
            className="ml-4 text-xl"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  )
}