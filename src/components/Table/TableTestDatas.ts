export const Columns = [
  {
    name: "name",
    label: "Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "date",
    label: "Date",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "role",
    label: "Role",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "active",
    label: "Active",
    options: {
      filter: true,
      sort: true,
    },
  },
];

interface tableTestRows {
  name: string;
  date: string;
  role: string;
  active: string;
}

export const Rows: tableTestRows[] = [
  { name: "mohammad", date: "2022/2/15", role: "user", active: "false" },
  { name: "mohammad", date: "2022/2/15", role: "user", active: "false" },
  { name: "mohammad", date: "2022/2/15", role: "user", active: "false" },
  { name: "mohammad", date: "2022/2/15", role: "user", active: "false" },
  { name: "mohammad", date: "2022/2/15", role: "user", active: "false" },
  { name: "mohammad", date: "2022/2/15", role: "user", active: "false" },
  { name: "mohammad", date: "2022/2/15", role: "user", active: "false" },
];
