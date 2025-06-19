


// 'use client'

// import { useParams } from 'next/navigation'
// import { useEffect, useState } from 'react'
// import Image from 'next/image'
// import Button from "@/app/ui/Button"
// import Cta from "@/app/ui/Cta"
// import Div from "@/app/ui/Div"
// import PageHeading from "@/app/ui/PageHeading"
// import SectionHeading from "@/app/ui/SectionHeading"
// import Spacing from "@/app/ui/Spacing"

// export default function PortfolioDetailsPage() {
//   const { slug } = useParams()
//   const [portfolioData, setPortfolioData] = useState([])
//   const [portfolioItem, setPortfolioItem] = useState(null)
//   const [prevItem, setPrevItem] = useState(null)
//   const [nextItem, setNextItem] = useState(null)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch('/data/portfolio.json')
//         const data = await res.json()
//         setPortfolioData(data)

//         const currentIndex = data.findIndex(item => item.slug === slug)
//         const currentItem = data[currentIndex]

//         setPortfolioItem(currentItem)
//         setPrevItem(currentIndex > 0 ? data[currentIndex - 1] : null)
//         setNextItem(currentIndex < data.length - 1 ? data[currentIndex + 1] : null)
//       } catch (error) {
//         console.error('Error loading portfolio data:', error)
//       }
//     }

//     fetchData()
//   }, [slug])

//   if (!portfolioItem) {
//     return (
//       <Div className="container text-center py-20">
//         <h2>Portfolio item not found</h2>
//         <Spacing lg="20" md="20" />
//         <Button btnLink="/portfolio" btnText="Back to Portfolio" />
//       </Div>
//     )
//   }

//   return (
//     <>
//       <PageHeading
//         title={portfolioItem.title}
//         bgSrc='/images/service_hero_bg.jpeg'
//         pageLinkText='PORTFOLIO-DETAILS'
//       />
//       <Spacing lg='150' md='80' />
//       <Div className="container">
//         <Image
//           src={portfolioItem.images[0]}
//           alt={portfolioItem.title}
//           width={1200}
//           height={800}
//           className="cs-radius_15 w-100"
//         />
//         <Spacing lg='90' md='40' />
//         <Div className="row">
//           <Div className="col-lg-6">
//             <SectionHeading
//               title={portfolioItem.title}
//               subtitle={portfolioItem.category.replace(/_/g, ' ')}
//             >
//               <Spacing lg='40' md='20' />
//               <p>{portfolioItem.description}</p>
//               <Spacing lg='10' md='10' />
//               <p>
//                 Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.
//               </p>
//             </SectionHeading>
//           </Div>
//           <Div className="col-lg-5 offset-lg-1">
//             <Spacing lg='60' md='40' />
//             <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
//             <Spacing lg='50' md='30' />
//             <Div className="row">
//               <Div className="col-6">
//                 <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
//                 <p className='cs-m0'>{portfolioItem.category.replace(/_/g, ' ')}</p>
//                 <Spacing lg='30' md='30' />
//               </Div>
//               <Div className="col-6">
//                 <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
//                 <p className='cs-m0'>{portfolioItem.location}</p>
//                 <Spacing lg='30' md='30' />
//               </Div>
//               <Div className="col-6">
//                 <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Software:</h3>
//                 <p className='cs-m0'>{Array.isArray(portfolioItem.software) ? portfolioItem.software.join(', ') : portfolioItem.software}</p>
//                 <Spacing lg='30' md='30' />
//               </Div>
//               <Div className="col-6">
//                 <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
//                 <p className='cs-m0'>{portfolioItem.dated}</p>
//                 <Spacing lg='30' md='30' />
//               </Div>
//               <Div className="col-6">
//                 <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
//                 <p className='cs-m0'>{portfolioItem.client}</p>
//                 <Spacing lg='30' md='30' />
//               </Div>
//             </Div>
//           </Div>
//         </Div>

//         <Spacing lg='65' md='10' />
//         <Div className="cs-page_navigation cs-center">
//           <Div>
//             {prevItem ? (
//               <Button
//                 btnLink={`/portfolio/${prevItem.slug}`}
//                 btnText='Prev Project'
//                 variant='cs-type1'
//               />
//             ) : (
//               <div style={{ visibility: 'hidden' }}>
//                 <Button btnText='Prev Project' variant='cs-type1' disabled />
//               </div>
//             )}
//           </Div>
//           <Div>
//             {nextItem ? (
//               <Button
//                 btnLink={`/portfolio/${nextItem.slug}`}
//                 btnText='Next Project'
//               />
//             ) : (
//               <div style={{ visibility: 'hidden' }}>
//                 <Button btnText='Next Project' disabled />
//               </div>
//             )}
//           </Div>
//         </Div>
//       </Div>
//       <Spacing lg='145' md='80' />
//       <Cta
//         title='agency@arino.com'
//         bgSrc='/images/cta_bg_2.jpeg'
//         variant='rounded-0'
//       />
//     </>
//   )
// }

'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Button from "@/app/ui/Button"
import Cta from "@/app/ui/Cta"
import Div from "@/app/ui/Div"
import PageHeading from "@/app/ui/PageHeading"
import SectionHeading from "@/app/ui/SectionHeading"
import Spacing from "@/app/ui/Spacing"

export default function PortfolioDetailsPage() {
  const { slug } = useParams()
  const [portfolioData, setPortfolioData] = useState([])
  const [portfolioItem, setPortfolioItem] = useState(null)
  const [prevItem, setPrevItem] = useState(null)
  const [nextItem, setNextItem] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data/portfolio.json')
        const data = await res.json()
        setPortfolioData(data)

        if (!slug) return

        const currentIndex = data.findIndex(item => item.slug === slug)
        if (currentIndex === -1) {
          setPortfolioItem(null)
          setLoading(false)
          return
        }

        const currentItem = data[currentIndex]
        setPortfolioItem(currentItem)
        setPrevItem(currentIndex > 0 ? data[currentIndex - 1] : null)
        setNextItem(currentIndex < data.length - 1 ? data[currentIndex + 1] : null)
        setLoading(false)
      } catch (error) {
        console.error('Error loading portfolio data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [slug])

  if (loading || !slug) {
    return (
      <Div className="container text-center py-20">
        <h2>Loading Portfolio Details...</h2>
        <Spacing lg="20" md="20" />
        <Button btnLink="/portfolio" btnText="Back to Portfolio" />
      </Div>
    )
  }

  if (!portfolioItem) {
    return (
      <Div className="container text-center py-20">
        <h2>Portfolio item not found</h2>
        <Spacing lg="20" md="20" />
        <Button btnLink="/portfolio" btnText="Back to Portfolio" />
      </Div>
    )
  }

  return (
    <>
      <PageHeading
        title={portfolioItem.title}
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PORTFOLIO-DETAILS'
      />
      <Spacing lg='150' md='80' />
      <Div className="container">
        <Image
          src={portfolioItem.images[0]}
          alt={portfolioItem.title}
          width={1200}
          height={800}
          className="cs-radius_15 w-100"
        />
        <Spacing lg='90' md='40' />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title={portfolioItem.title}
              subtitle={portfolioItem.category.replace(/_/g, ' ')}
            >
              <Spacing lg='40' md='20' />
              <p>{portfolioItem.description}</p>
              <Spacing lg='10' md='10' />
              <p>
                Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.
              </p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40' />
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30' />
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>{portfolioItem.category.replace(/_/g, ' ')}</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>{portfolioItem.location}</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Software:</h3>
                <p className='cs-m0'>{Array.isArray(portfolioItem.software) ? portfolioItem.software.join(', ') : portfolioItem.software}</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                <p className='cs-m0'>{portfolioItem.dated}</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>{portfolioItem.client}</p>
                <Spacing lg='30' md='30' />
              </Div>
            </Div>
          </Div>
        </Div>

        <Spacing lg='65' md='10' />
        <Div className="cs-page_navigation cs-center">
          <Div>
            {prevItem ? (
              <Button
                btnLink={`/portfolio/${prevItem.slug}`}
                btnText='Prev Project'
                variant='cs-type1'
              />
            ) : (
              <div style={{ visibility: 'hidden' }}>
                <Button btnText='Prev Project' variant='cs-type1' disabled />
              </div>
            )}
          </Div>
          <Div>
            {nextItem ? (
              <Button
                btnLink={`/portfolio/${nextItem.slug}`}
                btnText='Next Project'
              />
            ) : (
              <div style={{ visibility: 'hidden' }}>
                <Button btnText='Next Project' disabled />
              </div>
            )}
          </Div>
        </Div>
      </Div>
      <Spacing lg='145' md='80' />
      <Cta
        title='agency@arino.com'
        bgSrc='/images/cta_bg_2.jpeg'
        variant='rounded-0'
      />
    </>
  )
}
