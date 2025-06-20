// import React from 'react';
// import { Icon } from '@iconify/react';
// import Link from "next/link";;

// export default function Button({ btnLink, btnText, variant, icon }) {
//   return (
//     <Link
//       href={btnLink}
//       className={variant ? `cs-text_btn text-white ${variant}` : 'cs-text_btn'}
//     >
//       <>
//         <span>{btnText}</span>
//         {icon ? icon : <Icon icon="bi:arrow-right" />}
//       </>
//     </Link>
//   );
// }

import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Button({ btnLink, btnText, icon }) {
  return (
    <Link href={btnLink} className="cs-text_btn text-white">
      <>
        <span>{btnText}</span>
        {icon ? icon : <Icon icon="bi:arrow-right" />}
      </>
    </Link>
  );
}
