
import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Button({ btnLink = '#', btnText = 'Click', icon, disabled = false }) {
  if (disabled) {
    return (
      <span className="cs-text_btn text-white opacity-50 cursor-not-allowed inline-flex items-center gap-1">
        <span>{btnText}</span>
        {icon ? icon : <Icon icon="bi:arrow-right" />}
      </span>
    );
  }

  return (
    <Link href={btnLink} className="cs-text_btn text-white">
      <span>{btnText}</span>
      {icon ? icon : <Icon icon="bi:arrow-right" />}
    </Link>
  );
}
