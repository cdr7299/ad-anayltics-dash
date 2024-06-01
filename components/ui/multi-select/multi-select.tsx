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
    : "Choose at least one item";
  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
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
        className={styles.multipleSelect}
        onClick={() => setToggleOpen((toggle) => !toggle)}
      >
        <div className={styles.placeholder}>{placeholderText}</div>
        <div
          className={`${styles.icon} ${
            toggleOpen ? styles.triangleUp : styles.triangleDown
          }`}
        />
      </div>
      {toggleOpen && (
        <div className={styles.dropdown}>
          {data.map((d) => (
            <div key={d} className={styles.dropdownItem}>
              <input
                type="checkbox"
                id={d}
                name={d}
                value={d}
                onChange={handleChange}
                checked={selectedItems.includes(d)}
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
