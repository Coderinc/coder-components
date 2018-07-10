import styled from 'styled-components';

export default styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  max-height: 100%;
  max-width: ${props => {
    if (props.small) {return '40rem';}
    else if (props.large) {return '75rem';}
    else if (props.extraLarge) {return '100rem';}
    return '50rem';
  }};
`;

