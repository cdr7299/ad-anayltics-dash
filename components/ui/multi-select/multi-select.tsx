import { useEffect, useRef, useState } from "react";
import styles from "./multi-select.module.css";

const MultiSelect = ({
  data,
  onChange,
}: {
  data: any[];
  onChange: (newData: string[]) => void;
}) => {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>(data);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedItem = event.target.value;
    let updatedItems = [...selectedItems];
    if (selectedItems.includes(selectedItem)) {
      updatedItems = selectedItems.filter((item) => item !== selectedItem);
    } else {
      updatedItems.push(selectedItem);
    }
    setSelectedItems(updatedItems);
    onChange(updatedItems);
  };

  const placeholderText = selectedItems.length
    ? `${selectedItems.length} selected`
    : "None selected";

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setToggleOpen(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setToggleOpen((toggle) => !toggle);
    } else if (event.key === "Escape") {
      setToggleOpen(false);
    }
  };

  useEffect(() => {
    if (toggleOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleOpen]);

  return (
    <div className="container" ref={containerRef}>
      <div
        className={`${styles.multipleSelect} bg-white dark:bg-slate-600 dark:text-white`}
        onClick={() => setToggleOpen((toggle) => !toggle)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-label="Select Advertisers"
        role="button"
        aria-expanded={toggleOpen}
      >
        <div className={`${styles.placeholder} dark:text-white`}>
          {placeholderText}
        </div>
        <div
          className={`${styles.icon} ${
            toggleOpen ? styles.triangleUp : styles.triangleDown
          }`}
        />
      </div>
      {toggleOpen && (
        <div
          className={`${styles.dropdown} bg-white dark:bg-slate-600 dark:text-white`}
        >
          {data.map((d) => (
            <div key={d} className={`${styles.dropdownItem} dark:text-white`}>
              <input
                type="checkbox"
                id={d}
                name={d}
                value={d}
                onChange={handleChange}
                checked={selectedItems.includes(d)}
                className="dark:text-black"
              />
              <label htmlFor={d} className="label w-full">
                {d}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
