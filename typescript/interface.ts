interface PersonState {
  name: string;
  isHungry: boolean;
  children?: boolean;
}

const showState = (person: PersonState) => {
  return person.name + " is " + (person.isHungry ? "hungry" : "not hungry");
};

let danTheMan: PersonState = {
  name: "Dan The Man",
  isHungry: true,
};

console.log(showState(danTheMan));
