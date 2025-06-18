

// 'use client';
// import { useState } from 'react';
// import { Icon } from '@iconify/react';
// import PageHeading from '@/app/ui/PageHeading';
// import Spacing from '@/app/ui/Spacing';
// import Div from '@/app/ui/Div';
// import SectionHeading from '@/app/ui/SectionHeading';
// import Portfolio from '@/app/ui/Portfolio';
// import Cta from '@/app/ui/Cta';
// import portfolioData from '@/app/data/portfolio.json';

// const categoryMenu = [
//   { title: 'Graphic Design', category: 'graphic_design' },
//   { title: 'UI/UX Design', category: 'ui_ux_design' },
//   { title: 'Mobile Apps', category: 'mobile_apps' },
//   { title: 'Web Development', category: 'web_development' },
//   { title: 'Branding', category: 'branding' }
// ];

// export default function PortfolioPage() {
//   const [active, setActive] = useState('all');
//   const [itemShow, setItemShow] = useState(6);

//   const filteredData =
//     active === 'all'
//       ? portfolioData
//       : portfolioData.filter(item => item.category === active);

//   return (
//     <>
//       <PageHeading
//         title="Portfolio"
//         bgSrc="/images/portfolio_hero_bg.jpeg"
//         pageLinkText="Portfolio"
//       />
//       <Spacing lg="145" md="80" />
//       <Div className="container">
//         <Div className="cs-portfolio_1_heading">
//           <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
//           <Div className="cs-filter_menu cs-style1">
//             <ul className="cs-mp0 cs-center">
//               <li className={active === 'all' ? 'active' : ''}>
//                 <span onClick={() => setActive('all')}>All</span>
//               </li>
//               {categoryMenu.map((item, index) => (
//                 <li
//                   className={active === item.category ? 'active' : ''}
//                   key={index}
//                 >
//                   <span onClick={() => setActive(item.category)}>{item.title}</span>
//                 </li>
//               ))}
//             </ul>
//           </Div>
//         </Div>
//         <Spacing lg="90" md="45" />
//         <Div className="row">
//           {filteredData.slice(0, itemShow).map((item, index) => (
//             <Div
//               className={`${
//                 index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'
//               }`}
//               key={index}
//             >
//               <Portfolio
//                 title={item.title}
//                 subtitle={item.subtitle}
//                 href={`/portfolio/${item.slug}`}
//                 src={item.images[0]} // ✅ Updated to match new JSON structure
//                 variant="cs-style1 cs-type1"
//               />
//               <Spacing lg="25" md="25" />
//             </Div>
//           ))}
//         </Div>

//         <Div className="text-center">
//           {filteredData.length <= itemShow ? null : (
//             <>
//               <Spacing lg="65" md="40" />
//               <span
//                 className="cs-text_btn"
//                 onClick={() => setItemShow(itemShow + 3)}
//               >
//                 <span>Load More</span>
//                 <Icon icon="bi:arrow-right" />
//               </span>
//             </>
//           )}
//         </Div>
//       </Div>
//       <Spacing lg="145" md="80" />
//       <Cta
//         title="agency@arino.com"
//         bgSrc="/images/cta_bg_2.jpeg"
//         variant="rounded-0"
//       />
//     </>
//   );
// }

'use client';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import PageHeading from '@/app/ui/PageHeading';
import Spacing from '@/app/ui/Spacing';
import Div from '@/app/ui/Div';
import SectionHeading from '@/app/ui/SectionHeading';
import Portfolio from '@/app/ui/Portfolio';
import Cta from '@/app/ui/Cta';

const categoryMenu = [
  { title: 'Graphic Design', category: 'graphic_design' },
  { title: 'UI/UX Design', category: 'ui_ux_design' },
  { title: 'Mobile Apps', category: 'mobile_apps' },
  { title: 'Web Development', category: 'web_development' },
  { title: 'Branding', category: 'branding' },
];

export default function PortfolioPage() {
  const [portfolioData, setPortfolioData] = useState([]);
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data/portfolio.json');
      const data = await res.json();
      setPortfolioData(data);
    };
    fetchData();
  }, []);

  const filteredData =
    active === 'all'
      ? portfolioData
      : portfolioData.filter(item => item.category === active);

  return (
    <>
      <PageHeading
        title="Portfolio"
        bgSrc="/images/portfolio_hero_bg.jpeg"
        pageLinkText="Portfolio"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === 'all' ? 'active' : ''}>
                <span onClick={() => setActive('all')}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? 'active' : ''}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>{item.title}</span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {filteredData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={`/portfolio/${item.slug}`}
                src={item.images[0]}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>
        <Div className="text-center">
          {filteredData.length <= itemShow ? null : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      <Cta
        title="agency@arino.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
