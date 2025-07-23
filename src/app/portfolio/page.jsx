

'use client';
import { useEffect, useState } from 'react';
import PageHeading from '@/app/ui/PageHeading';
import Spacing from '@/app/ui/Spacing';
import Cta from '@/app/ui/Cta';
import PortfolioGrid from '@/app/ui/PortfolioGrid';

export default function PortfolioPage() {
  const [portfolioData, setPortfolioData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data/portfolio.json');
        const data = await res.json();
        setPortfolioData(data);
      } catch (error) {
        console.error('Error loading portfolio data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div className="text-center py-20">Loading portfolio...</div>;
  }

  return (
    <>
      <PageHeading
        title="Portfolio"
        bgSrc="/images/portfolio_hero_bg.jpeg"
        pageLinkText="Portfolio"
      />
      <Spacing lg="145" md="80" />
      
      <div className="container">
        <PortfolioGrid 
          portfolioData={portfolioData}
          title="Some recent work"
          subtitle="Our Portfolio"
          showFilter={true}
          initialItems={6}
          loadMoreStep={3}
        />
      </div>
      
      <Spacing lg="145" md="80" />
      <Cta
        title="desigininstudio60@gmail.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}