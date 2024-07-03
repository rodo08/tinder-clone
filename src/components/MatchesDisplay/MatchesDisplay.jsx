import axios from "axios";
import { useEffect, useState } from "react";

const MatchesDisplay = ({ matches }) => {
  const matchedUsersIds = matches.map(({ user_id }) => user_id);
  const [matchedProfiles, setMatchesProfiles] = useState(null);
  const getMatches = async () => {
    try {
      const response = axios.get("http//localhost:8000/users", {
        params: { userIds: JSON.stringify(matchedUsersIds) },
      });
      setMatchedProfiles(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMatches();
  }, []);

  console.log(matchedProfiles);

  return <div className="matches-display"></div>;
};

export default MatchesDisplay;
