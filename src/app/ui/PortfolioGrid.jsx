'use client';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import Div from '@/app/ui/Div';
import Portfolio from '@/app/ui/Portfolio';
import Spacing from '@/app/ui/Spacing';
import SectionHeading from '@/app/ui/SectionHeading';
import { useRouter } from 'next/navigation'; // Add this import

const categoryMenu = [
  { title: 'Graphic Design', category: 'graphic_design' },
  { title: 'UI/UX Design', category: 'ui_ux_design' },
  { title: 'Mobile Apps', category: 'mobile_apps' },
  { title: 'Web Development', category: 'web_development' },
  { title: 'Branding', category: 'branding' },
];

export default function PortfolioGrid({ 
  portfolioData = [], 
  title = "Some recent work", 
  subtitle = "Our Portfolio",
  showFilter = true,
  initialItems = 6,
  loadMoreStep = 3,
  isLoading = false,
  redirectOnLoadMore = false // New prop to control redirect behavior
}) {
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(initialItems);
  const router = useRouter(); // Initialize router

  const safePortfolioData = Array.isArray(portfolioData) ? portfolioData : [];
  
  const filteredData = active === 'all'
    ? safePortfolioData
    : safePortfolioData.filter(item => item?.category === active);

  const handleLoadMore = () => {
    if (redirectOnLoadMore) {
      router.push('/portfolio'); // Redirect to portfolio page
    } else {
      setItemShow(prev => prev + loadMoreStep); // Default load more behavior
    }
  };

  if (isLoading) {
    return <div className="text-center py-20">Loading portfolio...</div>;
  }

  return (
    <Div className="container">
      <Div className="cs-portfolio_1_heading">
        <SectionHeading title={title} subtitle={subtitle} />
        
        {showFilter && (
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === 'all' ? 'active' : ''}>
                <span 
                  onClick={() => {
                    setActive('all');
                    setItemShow(initialItems);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  All
                </span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? 'active' : ''}
                  key={index}
                >
                  <span 
                    onClick={() => {
                      setActive(item.category);
                      setItemShow(initialItems);
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        )}
      </Div>
      
      <Spacing lg="90" md="45" />
      
      <Div className="row">
        {filteredData.slice(0, itemShow).map((item, index) => (
          <Div
            className={`${
              index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'
            }`}
            key={item?.id || index}
          >
            <Portfolio
              title={item?.title || ''}
              subtitle={item?.subtitle || ''}
              href={`/portfolio/${item?.slug || '#'}`}
              src={item?.images?.[0]}
              variant="cs-style1 cs-type1"
            />
            <Spacing lg="25" md="25" />
          </Div>
        ))}
      </Div>
      
      {filteredData.length > itemShow && (
        <Div className="text-center">
          <Spacing lg="65" md="40" />
          <span
            className="cs-text_btn"
            onClick={handleLoadMore}
            style={{
              background: 'linear-gradient(45deg, rgb(27, 253, 243), rgb(174, 255, 174))',
              color: '#1d1d1d',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <span>Load More</span>
            <Icon icon="bi:arrow-right" />
          </span>
        </Div>
      )}
    </Div>
  );
}