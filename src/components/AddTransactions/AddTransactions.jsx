import { useState } from "react";
import { addTransaction } from "../../services/api";
import {
  AddFormBlock,
  AddForm,
  AddHeading,
  CategoryButtonGroup,
  CategoryButton,
  AddFormLabel,
  AddFormInput,
  AddFormBlockInput,
  AddFormButton,
} from "./AddTransactions.styled";

// Иконки для категорий
const FoodIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.22 3.25L10.99 3.25L9.01 1.28C8.86 1.12 8.6 1.12 8.44 1.28C8.28 1.44 8.28 1.69 8.44 1.86L9.83 3.25L4.16 3.25L5.55 1.86C5.71 1.7 5.71 1.44 5.55 1.28C5.4 1.12 5.14 1.12 4.98 1.28L3.01 3.25L2.78 3.25C2.25 3.25 1.16 3.25 1.16 4.74C1.16 5.31 1.28 5.68 1.52 5.93C1.66 6.07 1.83 6.15 2.01 6.19C2.18 6.23 2.36 6.24 2.54 6.24L11.45 6.24C11.63 6.24 11.8 6.22 11.97 6.19C12.46 6.07 12.83 5.72 12.83 4.74C12.83 3.25 11.74 3.25 11.22 3.25Z"
      fill="currentColor"
    />
    <path
      d="M11.11 7L2.84 7C2.47 7 2.2 7.32 2.26 7.67L2.75 10.67C2.91 11.67 3.35 12.83 5.29 12.83L8.56 12.83C10.53 12.83 10.88 11.84 11.09 10.74L11.68 7.69C11.75 7.33 11.48 7 11.11 7ZM6.18 10.76C6.18 10.99 6 11.17 5.78 11.17C5.55 11.17 5.37 10.99 5.37 10.76L5.37 8.83C5.37 8.61 5.55 8.42 5.78 8.42C6 8.42 6.18 8.61 6.18 8.83L6.18 10.76ZM8.68 10.76C8.68 10.99 8.5 11.17 8.27 11.17C8.05 11.17 7.86 10.99 7.86 10.76L7.86 8.83C7.86 8.61 8.05 8.42 8.27 8.42C8.5 8.42 8.68 8.61 8.68 8.83L8.68 10.76Z"
      fill="currentColor"
    />
  </svg>
);

const TransportIcon = () => (
  <svg
    width="14.000000"
    height="14.000000"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <path
      id="Vector"
      d="M12.68 4.66C12.68 4.9 12.48 5.1 12.25 5.1L1.75 5.1C1.51 5.1 1.31 4.9 1.31 4.66C1.31 4.42 1.51 4.22 1.75 4.22L2.34 4.22L2.56 3.17C2.77 2.15 3.21 1.21 4.95 1.21L9.04 1.21C10.78 1.21 11.22 2.15 11.43 3.17L11.65 4.22L12.25 4.22C12.48 4.22 12.68 4.42 12.68 4.66Z"
      fill="currentColor"
    />
    <path
      id="Vector"
      d="M12.93 7.96C12.85 7 12.59 5.97 10.72 5.97L3.27 5.97C1.4 5.97 1.15 7 1.06 7.96L0.73 11.52C0.69 11.96 0.83 12.4 1.14 12.73C1.45 13.07 1.89 13.27 2.35 13.27L3.45 13.27C4.39 13.27 4.57 12.72 4.69 12.37L4.81 12.02C4.94 11.61 4.98 11.52 5.5 11.52L8.49 11.52C9.01 11.52 9.03 11.57 9.18 12.02L9.3 12.37C9.42 12.72 9.6 13.27 10.54 13.27L11.64 13.27C12.1 13.27 12.54 13.07 12.85 12.73C13.16 12.4 13.3 11.96 13.26 11.52L12.93 7.96ZM5.25 9.18L3.5 9.18C3.26 9.18 3.06 8.98 3.06 8.74C3.06 8.51 3.26 8.31 3.5 8.31L5.25 8.31C5.48 8.31 5.68 8.51 5.68 8.74C5.68 8.98 5.48 9.18 5.25 9.18ZM10.5 9.18L8.75 9.18C8.51 9.18 8.31 8.98 8.31 8.74C8.31 8.51 8.51 8.31 8.75 8.31L10.5 8.31C10.73 8.31 10.93 8.51 10.93 8.74C10.93 8.98 10.73 9.18 10.5 9.18Z"
      fill="currentColor"
    />
    <g opacity="0.000000" />
  </svg>
);

const HousingIcon = () => (
  <svg
    width="12.541687"
    height="11.793457"
    viewBox="0 0 12.5417 11.7935"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <path
      id="Vector"
      d="M12.1 10.91L11.52 10.91L11.52 4.34C11.52 3.98 11.35 3.64 11.07 3.42L10.35 2.86L10.34 1.43C10.34 1.11 10.08 0.85 9.75 0.85L7.77 0.85L6.98 0.24C6.56 -0.09 5.97 -0.09 5.55 0.24L1.46 3.42C1.18 3.64 1.02 3.98 1.02 4.33L0.99 10.91L0.43 10.91C0.19 10.91 0 11.11 0 11.35C0 11.59 0.19 11.79 0.43 11.79L12.1 11.79C12.34 11.79 12.54 11.59 12.54 11.35C12.54 11.11 12.34 10.91 12.1 10.91ZM3.06 5.96L3.06 5.08C3.06 4.76 3.32 4.5 3.64 4.5L4.81 4.5C5.13 4.5 5.39 4.76 5.39 5.08L5.39 5.96C5.39 6.28 5.13 6.54 4.81 6.54L3.64 6.54C3.32 6.54 3.06 6.28 3.06 5.96ZM7.72 10.91L4.81 10.91L4.81 9.31C4.81 8.83 5.2 8.43 5.68 8.43L6.85 8.43C7.33 8.43 7.72 8.83 7.72 9.31L7.72 10.91ZM9.47 5.96C9.47 6.28 9.21 6.54 8.89 6.54L7.72 6.54C7.4 6.54 7.14 6.28 7.14 5.96L7.14 5.08C7.14 4.76 7.4 4.5 7.72 4.5L8.89 4.5C9.21 4.5 9.47 4.76 9.47 5.08L9.47 5.96Z"
      fill="currentColor"
    />
  </svg>
);

const JoyIcon = () => (
  <svg
    width="14.000000"
    height="14.000000"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <g opacity="0.000000" />
    <path
      id="Vector"
      d="M9.91 1.16L4.08 1.16C2.79 1.16 1.75 2.21 1.75 3.49L1.75 10.49C1.75 11.78 2.79 12.83 4.08 12.83L9.91 12.83C11.2 12.83 12.25 11.78 12.25 10.49L12.25 3.49C12.25 2.21 11.2 1.16 9.91 1.16ZM6.33 10.58C6.24 10.66 6.13 10.7 6.02 10.7C5.91 10.7 5.8 10.66 5.71 10.58L5.33 10.2L4.97 10.56C4.88 10.65 4.77 10.69 4.66 10.69C4.55 10.69 4.44 10.65 4.35 10.56C4.18 10.39 4.18 10.11 4.35 9.94L4.71 9.58L4.37 9.23C4.2 9.07 4.2 8.79 4.37 8.62C4.54 8.45 4.82 8.45 4.99 8.62L5.33 8.96L5.69 8.6C5.86 8.43 6.14 8.43 6.31 8.6C6.48 8.77 6.48 9.05 6.31 9.22L5.95 9.58L6.33 9.96C6.5 10.13 6.5 10.41 6.33 10.58ZM8.45 10.78C8.13 10.78 7.86 10.52 7.86 10.2L7.86 10.19C7.86 9.87 8.13 9.61 8.45 9.61C8.77 9.61 9.03 9.87 9.03 10.19C9.03 10.51 8.77 10.78 8.45 10.78ZM9.63 9.52C9.31 9.52 9.04 9.26 9.04 8.94C9.04 8.62 9.29 8.35 9.61 8.35L9.63 8.35C9.95 8.35 10.21 8.62 10.21 8.94C10.21 9.26 9.95 9.52 9.63 9.52ZM10.5 5.39C10.5 5.95 10.03 6.41 9.47 6.41L4.52 6.41C3.96 6.41 3.5 5.95 3.5 5.39L3.5 3.93C3.5 3.37 3.96 2.91 4.52 2.91L9.47 2.91C10.03 2.91 10.5 3.37 10.5 3.93L10.5 5.39Z"
      fill="currentColor"
    />
  </svg>
);

const EducationIcon = () => (
  <svg
    width="14.000000"
    height="14.000000"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <path
      id="Vector"
      d="M9.81 9.12C10.2 8.86 10.72 9.14 10.72 9.61L10.72 10.36C10.72 11.1 10.14 11.9 9.45 12.13L7.58 12.75C7.26 12.86 6.73 12.86 6.41 12.75L4.55 12.13C3.85 11.9 3.27 11.1 3.27 10.36L3.27 9.6C3.27 9.14 3.79 8.86 4.17 9.11L5.37 9.89C5.83 10.2 6.42 10.36 7 10.36C7.58 10.36 8.17 10.2 8.63 9.89L9.81 9.12Z"
      fill="currentColor"
    />
    <path
      id="Vector"
      d="M11.65 3.76L8.16 1.47C7.53 1.06 6.49 1.06 5.86 1.47L2.35 3.76C1.22 4.49 1.22 6.14 2.35 6.88L3.28 7.48L5.86 9.17C6.49 9.58 7.53 9.58 8.16 9.17L10.72 7.48L11.52 6.96L11.52 8.75C11.52 8.98 11.71 9.18 11.95 9.18C12.19 9.18 12.39 8.98 12.39 8.75L12.39 5.88C12.62 5.12 12.39 4.25 11.65 3.76Z"
      fill="currentColor"
    />
    <g opacity="0.000000" />
  </svg>
);

const OthersIcon = () => (
  <svg
    width="11.666656"
    height="11.666748"
    viewBox="0 0 11.6667 11.6667"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <path
      id="Vector"
      d="M8.16 0L3.5 0C1.16 0 0 1.16 0 3.5L0 11.08C0 11.4 0.26 11.66 0.58 11.66L8.16 11.66C10.5 11.66 11.66 10.5 11.66 8.16L11.66 3.5C11.66 1.16 10.5 0 8.16 0ZM7 7.72L2.91 7.72C2.67 7.72 2.47 7.53 2.47 7.29C2.47 7.05 2.67 6.85 2.91 6.85L7 6.85C7.23 6.85 7.43 7.05 7.43 7.29C7.43 7.53 7.23 7.72 7 7.72ZM8.75 4.81L2.91 4.81C2.67 4.81 2.47 4.61 2.47 4.37C2.47 4.13 2.67 3.93 2.91 3.93L8.75 3.93C8.98 3.93 9.18 4.13 9.18 4.37C9.18 4.61 8.98 4.81 8.75 4.81Z"
      fill="currentColor"
    />
  </svg>
);

const categories = [
  { label: "Еда", value: "food", icon: <FoodIcon /> },
  { label: "Транспорт", value: "transport", icon: <TransportIcon /> },
  { label: "Жильё", value: "housing", icon: <HousingIcon /> },
  { label: "Развлечения", value: "joy", icon: <JoyIcon /> },
  { label: "Образование", value: "education", icon: <EducationIcon /> },
  { label: "Другое", value: "others", icon: <OthersIcon /> },
];

const AddTransactions = ({ onTransactionAdded }) => {
  const [formData, setFormData] = useState({
    description: "",
    sum: "",
    category: "food",
    date: "",
  });

  const [error, setError] = useState(null);
  const [datePlaceholder, setDatePlaceholder] = useState("Введите дату");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCategoryClick = (category) => {
    setFormData((prev) => ({
      ...prev,
      category,
    }));
  };

  const isValidDateFormat = (dateStr) => /^\d{2}\.\d{2}\.\d{4}$/.test(dateStr);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.description.trim() || formData.description.length < 2) {
      setError("Описание должно содержать минимум 2 символа");
      return;
    }

    if (!isValidDateFormat(formData.date)) {
      setError("Дата должна быть в формате ДД.ММ.ГГГГ");
      return;
    }

    if (!formData.sum || Number(formData.sum) <= 0) {
      setError("Сумма должна быть положительным числом");
      return;
    }

    try {
      const [day, month, year] = formData.date.split(".");
      const isoDate = new Date(
        `${year}-${month}-${day}T00:00:00`
      ).toISOString();

      const payload = {
        description: formData.description.trim(),
        sum: Number(formData.sum),
        category: formData.category,
        date: isoDate,
      };

      await addTransaction(payload);

      if (onTransactionAdded) onTransactionAdded();

      setFormData({
        description: "",
        sum: "",
        category: "food",
        date: "",
      });
    } catch (err) {
      setError(err.message || "Ошибка добавления транзакции");
    }
  };

  return (
    <AddFormBlock>
      <AddForm onSubmit={handleSubmit}>
        <AddHeading>Новый расход</AddHeading>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <AddFormBlockInput>
          <AddFormLabel>Описание</AddFormLabel>
          <AddFormInput
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            minLength={2}
            placeholder="Введите описание"
            $hasValue={!!formData.description}
          />
        </AddFormBlockInput>

        <AddFormBlockInput>
          <AddFormLabel>Категория</AddFormLabel>
          <CategoryButtonGroup>
            {categories.map((cat) => (
              <CategoryButton
                key={cat.value}
                type="button"
                $active={formData.category === cat.value}
                onClick={() => handleCategoryClick(cat.value)}
              >
                {cat.icon && <span style={{ marginRight: 6 }}>{cat.icon}</span>}
                {cat.label}
              </CategoryButton>
            ))}
          </CategoryButtonGroup>
        </AddFormBlockInput>

        <AddFormBlockInput>
          <AddFormLabel>Дата</AddFormLabel>
          <AddFormInput
            name="date"
            type="text"
            placeholder={datePlaceholder}
            value={formData.date}
            onChange={handleChange}
            required
            pattern="\d{2}\.\d{2}\.\d{4}"
            onFocus={() => setDatePlaceholder("ДД.ММ.ГГГГ")}
            onBlur={() => setDatePlaceholder("Введите дату")}
            $hasValue={!!formData.date}
          />
        </AddFormBlockInput>

        <AddFormBlockInput>
          <AddFormLabel>Сумма</AddFormLabel>
          <AddFormInput
            name="sum"
            type="number"
            value={formData.sum}
            onChange={handleChange}
            required
            min={1}
            placeholder="Введите сумму"
            $hasValue={!!formData.sum}
          />
        </AddFormBlockInput>

        <AddFormButton type="submit">Добавить новый расход</AddFormButton>
      </AddForm>
    </AddFormBlock>
  );
};

export default AddTransactions;
