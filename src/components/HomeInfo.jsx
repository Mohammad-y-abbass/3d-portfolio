import { Link } from 'react-router-dom';

import { arrow } from '../assets/icons';

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='px-8 py-4 mx-5 text-center text-white sm:text-xl sm:leading-snug neo-brutalism-blue'>
        Hi, I'm
        <span className='mx-2 font-semibold text-white'>Mohammad</span>
        👋
        <br />An enthusiastic software developer with a love for clean code and
        problem-solving.
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Worked on many projects <br /> and picked up many skills along the
          way
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='object-contain w-4 h-4' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Led multiple projects to success throughout my journey. <br /> Curious about
          the impact?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='object-contain w-4 h-4' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Need a project done or looking for a dev? <br /> I'm just a few
          keystrokes away
        </p>

        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          Let's talk
          <img src={arrow} alt='arrow' className='object-contain w-4 h-4' />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
