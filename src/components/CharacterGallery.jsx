import Character from "./Character"
import data from "../data/characterData.json"

const CharacterGallery = () => {
  let characterList = data.map((char) => (
    <Character
      name={char.name}
      key={char.id}
      imgUrl={char.imgUrl}
      birth={char.birth}
      death={char.death}
      race={char.race}
      realm={char.realm}
      spouse={char.spouse}
        />
  ))

  return (
    <section>
      {characterList}
    </section>
  )
}

export default CharacterGallery