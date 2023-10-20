import React from "react";
import clsx from "clsx";

const CollapseCard = ({ children, isCurrent, title, index, updateTab }) => {
  const collapseCardClasses = clsx(
    "collapse-card",
    "bg-white",
    "rounded-lg",
    "p-2",
    "my-2",
    "w-full",
    "text-left",
    {
      "shadow-lg": !isCurrent,
      "shadow-xl": isCurrent,
    }
  );

  const collapseCardTitleClasses = clsx(
    "collapse-card-title",
    "text-md",
    "font-semibold",
    "text-gray-600",
    "mb-3",
    {
      "text-gray-600": !isCurrent,
      "text-gray-800 text-xl": isCurrent,
    }
  );

  if (!isCurrent) {
    return (
      <button onClick={() => updateTab(index)} className={collapseCardClasses}>
        <div className="collapse-card-header">
          <h2 className={collapseCardTitleClasses}>{title}</h2>
        </div>
      </button>
    );
  }

  return (
    <div className={collapseCardClasses}>
      <div className="collapse-card-header">
        <h2 className={collapseCardTitleClasses}>{title}</h2>
      </div>
      {isCurrent ? <div className="collapse-card-body">{children}</div> : null}
    </div>
  );
};

export default CollapseCard;
