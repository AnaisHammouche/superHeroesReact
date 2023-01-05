import axios from 'axios';

const getAllHeroes = async id => {

  try {
    const res = await axios.get(
      'https://www.superheroapi.com/api.php/902649214076991/1' + id,
    );

    return res.data;
  } catch (e) {
    console.log(e.stack);
  }
};

export default {getAllHeroes};
