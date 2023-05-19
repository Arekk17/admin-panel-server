const generateUsers = async () => {
  const languages = [
    {
      name: 'Russian',
      logo: 'https://flagicons.lipis.dev/flags/4x3/ru.svg',
    },
    {
      name: 'German',
      logo: 'https://flagicons.lipis.dev/flags/4x3/de.svg',
    },
    {
      name: 'Polish',
      logo: 'https://flagicons.lipis.dev/flags/4x3/pl.svg',
    },
    {
      name: 'Brazilian',
      logo: 'https://flagicons.lipis.dev/flags/4x3/br.svg',
    },
    {
      name: 'Portuguese',
      logo: 'https://flagicons.lipis.dev/flags/4x3/pt.svg',
    },
    {
      name: 'English',
      logo: 'https://flagicons.lipis.dev/flags/4x3/gb.svg',
    },
  ];

  return {
    name: 'language',
    data: languages,
  };
};

export default generateUsers;
