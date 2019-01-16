export const search = async (query) => {
  switch (query) {
    case 'react': //book already in library
      return [{title: "Pro React", id: "PKpPCwAAQBAJ"}];
    case 'asdfg': //query with no results
      return {};
    default:
      return [];
  }
};

export const getAll = async () => {
  return [{title: "Pro React", id: "1", shelf:'read'}, {title: "Pro React", id: "2", shelf:'wantToRead'}, {title: "Pro React", id: "3", shelf:'currentlyReading'}, {title: "Pro React", id: "4", shelf:'none'}];
}

export const update = async () => (null);