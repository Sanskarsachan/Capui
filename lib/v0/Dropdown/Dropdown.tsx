import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface DropdownProps {
  label: string;
  items: string[];
  href?: string;
  onToggle: (label: string) => void;
  isOpen: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ label, items, href, onToggle, isOpen }) => {
  return (
    <div className="dropdown-container relative">
      <button
        className="dropdown-toggle text-lg font-medium text-gray-800 hover:text-gray-600 flex items-center"
        onClick={() => onToggle(label)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        {isOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
      </button>

      {isOpen && (
        <div className="dropdown-menu absolute bg-white border shadow-lg mt-2 rounded-md">
          {items.map((item, index) => (
            <a
              key={index}
              href={href || '#'}
              className="dropdown-item block py-2 px-4 text-gray-800 hover:bg-gray-100"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
