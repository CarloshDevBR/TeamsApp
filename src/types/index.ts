export interface Group {
  id: string;
  title: string;
}

export interface Filter {
  id: string;
  title: string;
}

export interface Player {
  id: string;
  name: string;
  team: Team;
  groupId: string;
}

export interface Team {
  id: string;
  title: string;
}
