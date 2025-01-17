import { Member } from '@confs/shared/api-interfaces';

export const filterMembers = (member: string | null) => {
  return (m: Member): string[] => {
    const value = member?.toLowerCase() ?? '';
    const names = value.split(' ');

    const founded = names.filter((name) =>
      name.toLowerCase().includes(value) ? m : null
    );

    return founded;
  };
};
