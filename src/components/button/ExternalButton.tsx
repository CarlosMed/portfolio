import React from "react";

export default function ExternalButton(props, plausible) {
  const { href, className, icon, children, external, download, showIcon } =
    props.props;
  return (
    <a
      href={href}
      className={className}
      onClick={() => plausible("BtnClick: View Resume")}
    >
      {children}
    </a>
  );
}
