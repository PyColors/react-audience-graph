export interface RouterProps {
  location: {
    pathname: string;
  };
  history: {
    push: (path: string) => void;
  };
  match: {
    params: {
      id: string;
    };
  };
}
