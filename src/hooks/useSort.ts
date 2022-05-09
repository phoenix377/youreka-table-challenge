import { useMemo, useState } from "react";

interface TSortConfig<T> {
  direction: "ascending" | "descending";
  key: keyof T;
}

export const useSort = <T extends Record<any, any>>(
  items: T[],
  config?: TSortConfig<T>
) => {
  const [sortConfig, setSortConfig] = useState<TSortConfig<T> | undefined>(
    config
  );

  const sortedItems = useMemo(() => {
    const sortableItems = [...items];
    if (sortConfig) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] === null) {
          return 1;
        }

        if (b[sortConfig.key] === null) {
          return -1;
        }

        if (a[sortConfig.key] === b[sortConfig.key]) {
          return 0;
        }

        if (
          typeof a[sortConfig.key] === "number" &&
          typeof b[sortConfig.key] === "number"
        ) {
          return sortConfig.direction === "ascending"
            ? (a[sortConfig.key] as number) - (b[sortConfig.key] as number)
            : (b[sortConfig.key] as number) - (a[sortConfig.key] as number);
        }

        return sortConfig.direction === "ascending"
          ? (a[sortConfig.key] as string) < (b[sortConfig.key] as string)
            ? -1
            : 1
          : (b[sortConfig.key] as string) < (a[sortConfig.key] as string)
          ? -1
          : 1;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: keyof T) => {
    let direction: TSortConfig<T>["direction"] = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort };
};
