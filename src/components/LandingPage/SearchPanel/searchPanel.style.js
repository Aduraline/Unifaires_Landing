import styled from 'styled-components';

const SearchPanelWrapper = styled.div`
  max-width: 600px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  align-items: center;
  background: rgba(88, 50, 218, 0.05);

  justify-content: center;
  .reusecore__input {
    .field-wrapper {
      input {
        border: 0;
        border-radius: 34px;
        width:320px;
        height: 70px;
        box-shadow: 0 3px 20px rgba(35, 49, 90, 0.08);
        color: #20201d;
        font-size: 16px;
        font-weight: 400;
        padding-left: 39px;
        padding-right: 80px;
        
        &:placholder {
          color: rgba(32, 32, 29, 0.5);
        }
      }
      .input-icon {
        width: 70px;
        height: 100%;
        border-radius: 9999px;
        background: #5832DA;
        cursor: pointer;

        
        svg {
          width: 28px;
          height: 28px;
          path {
            fill: white;
          }
        }
      }
    }
  }
`;

export default SearchPanelWrapper;
