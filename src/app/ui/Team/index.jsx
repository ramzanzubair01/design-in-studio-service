

// import React from 'react';
// import { Icon } from '@iconify/react';
// import Div from '../Div';
// import Link from 'next/link';

// export default function Team({
//   memberImage,
//   memberName,
//   memberDesignation,
//   memberSocial,
// }) {
//   return (
//     <Div className="cs-team cs-style1">
//       <Div className="cs-member_thumb">
//         <img src={memberImage} alt={memberName} />
//         <Div className="cs-member_overlay" />
//       </Div>
//       <Div className="cs-member_info">
//         <h2 className="cs-member_name">{memberName}</h2>
//         <Div className="cs-member_designation">{memberDesignation}</Div>
//       </Div>

//       {/* External social links should be <a> tags, not <Link> */}
//       <Div className="cs-member_social cs-primary_color">
//         {memberSocial.linkedin && (
//           <Link
//             href={memberSocial.linkedin}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="LinkedIn"
//           >
//             <Icon icon="fa6-brands:linkedin-in" />
//           </Link>
//         )}
//         {memberSocial.twitter && (
//           <a
//             href={memberSocial.twitter}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Twitter"
//           >
//             <Icon icon="fa-brands:twitter" />
//           </a>
//         )}
//         {memberSocial.youtube && (
//           <a
//             href={memberSocial.youtube}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="YouTube"
//           >
//             <Icon icon="fa-brands:youtube" />
//           </a>
//         )}
//         {memberSocial.facebook && (
//           <a
//             href={memberSocial.facebook}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Facebook"
//           >
//             <Icon icon="fa-brands:facebook-f" />
//           </a>
//         )}
//       </Div>
//     </Div>
//   );
// }

'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import Div from '../Div';
import Link from 'next/link';

export default function Team({
  memberImage,
  memberName,
  memberDesignation,
  memberSocial,
  profileLink = null,
}) {
  return (
    <Div className="cs-team cs-style1">
      <Div className="cs-member_thumb">
        {profileLink ? (
          <Link href={profileLink}>
            <img src={memberImage} alt={memberName} />
          </Link>
        ) : (
          <img src={memberImage} alt={memberName} />
        )}
        <Div className="cs-member_overlay" />
      </Div>

      <Div className="cs-member_info">
        {profileLink ? (
          <Link href={profileLink}>
            <h2 className="cs-member_name">{memberName}</h2>
          </Link>
        ) : (
          <h2 className="cs-member_name">{memberName}</h2>
        )}
        <Div className="cs-member_designation">{memberDesignation}</Div>
      </Div>

      <Div className="cs-member_social cs-primary_color">
        {memberSocial.linkedin && (
          <a
            href={memberSocial.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Icon icon="fa6-brands:linkedin-in" />
          </a>
        )}
        {memberSocial.twitter && (
          <a
            href={memberSocial.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Icon icon="fa-brands:twitter" />
          </a>
        )}
        {memberSocial.youtube && (
          <a
            href={memberSocial.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <Icon icon="fa-brands:youtube" />
          </a>
        )}
        {memberSocial.facebook && (
          <a
            href={memberSocial.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Icon icon="fa-brands:facebook-f" />
          </a>
        )}
      </Div>
    </Div>
  );
}
