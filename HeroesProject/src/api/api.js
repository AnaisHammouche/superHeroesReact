import axios from 'axios';

const getAllHeroes = async heroes => {
  try {
    const res = await axios.get(
      'https://www.superheroapi.com/api.php/902649214076991/search/e',
    );

    return res.data;
  } catch (e) {
    console.log(e.stack);
  }
};

const getHeroeBiography = async id => {
  try {
    const res = await axios.get(
      'https://www.superheroapi.com/api.php/902649214076991/' + id + '/biography',
    );

    return res.data;
  } catch (e) {
    console.log(e.stack);
  }
};

const getHeroeImage = async id => {
  try {
    const res = await axios.get(
        'https://www.superheroapi.com/api.php/902649214076991/' + id + '/image',
    );

    return res.data;
  } catch (e) {
    console.log(e.stack);
  }
};

const heroSearch = async search => {
  try {
    const res = await axios.get(
      'https://www.superheroapi.com/api.php/902649214076991/search/' + search,
    );

    return res.data;
  } catch (e) {
    console.log(e.stack);
  }
};

export default {getAllHeroes, getHeroeBiography, getHeroeImage, heroSearch};
