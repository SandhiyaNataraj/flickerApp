import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import backgroundImage from '../assets/home.jpg';
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres,fetchMovies} from '../store';
import Slider from '../components/Slider';

export default function Flickering() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
 
const dispatch=useDispatch();
const genresLoaded=useSelector((state)=>state.flicker.genresLoaded);
const movies=useSelector((state)=>state.flicker.movies);
useEffect(()=>{
     dispatch(getGenres());
},[])

useEffect(()=>{
  if(genresLoaded) dispatch(fetchMovies({type:"all"}));
})

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };


  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className='hero'>
        <img
          src={backgroundImage}
          alt="background"
          className='background-image'
        />
        <div className='container'>
          <div className='logo'>
            <h1 className='movie-title'>Beauty and the Beast</h1>
            <div className='buttons'>
              <button className='flex j-center a-center' onClick={() => navigate('/player')}>
                <FaPlay /> Play
              </button>
              <button className='flex j-center a-center'>
                <AiOutlineInfoCircle /> More Info
              </button>
            </div>
          </div>
        </div>
      </div>
      <Slider movies={movies} />
    </Container>
  );
}

const Container = styled.div`
  background-color: black;

  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%);
    }

    img {
      height: 100vh;
      width: 100vw;
    }

    .container {
      position: absolute;
      bottom: 5rem;

      .logo {
        h1.movie-title {
          color: pink;
          font-size: 3rem;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
          margin-left: 5rem;
          font-weight: bold;
          font-size: 4rem;
        }
      }

      .buttons {
        margin: 5rem;
        gap: 2rem;
        display: flex;

        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.3s ease-in-out;

          &:hover {
            opacity: 0.8;
          }

          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .hero {
      .container {
        .logo {
          h1.movie-title {
            margin-left: 2rem;
            font-size: 2rem;
          }
        }

        .buttons {
          margin: 2rem;
          button {
            font-size: 1rem;
            padding-left: 1rem;
            padding-right: 1.2rem;
          }
        }
      }
    }
  }
`;
