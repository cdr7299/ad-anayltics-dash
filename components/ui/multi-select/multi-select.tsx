import { useState } from "react";
import styles from "./multi-select.module.css";
const MultiSelect = ({
  data,
  onChange,
}: {
  data: any[];
  onChange: (newData: any) => void;
}) => {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>(data);

  const isSelectAllOn = data.length === selectedItems.length;
  const handleSelectAll = () => setSelectedItems(isSelectAllOn ? [] : data);

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
    ? `${selectedItems.length} ${
        selectedItems.length === 1 ? "item" : "items"
      } selected`
    : "Choose at least one item";

  return (
    <div className="container">
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
          <div>
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
        </div>
      )}
      {/* <div className={styles.selectContainer}>
        <input
          type="checkbox"
          id="select-all"
          name="select-all"
          value="select-all"
          onChange={handleSelectAll}
          checked={isSelectAllOn}
        />
        <label htmlFor="select-all" className={styles.label}>
          Select all
        </label>
      </div> */}
    </div>
  );
};

export default MultiSelect;
