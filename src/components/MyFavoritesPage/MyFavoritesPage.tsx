import { useFavorites } from "../../context/FavoritesContext";

const MyFavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      <h1>My Favorite Characters</h1>
      <ul>
        {favorites.map((character) => (
          <li key={character.id}>
            <img src={character.imageUrl} alt={character.fullName} />
            {character.fullName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyFavoritesPage;
