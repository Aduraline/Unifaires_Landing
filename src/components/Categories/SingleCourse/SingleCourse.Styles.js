import styled from "styled-components";

export const SingleCourseStyles = styled.div`
  section {
    background: #f3f5f7;
    border-radius: 32px;
    margin-bottom: 95px;

    .title-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 64px;

      .brand-section {
        display: flex;
        align-items: end;
        gap: 32px;

        h6 {
          font-weight: 600;
          font-size: 30px;
          color: #12355b;
        } //
      } //

      .call-to-action {
        display: flex;
        align-items: center;
        gap: 18px;

        .secondary-button {
          border-radius: 8px;
          background: rgba(18, 53, 91, 0.05);
          color: #5832da;
          font-size: 16px;
          font-weight: 600;
          border: 1px solid #5832da;
        } //

        button {
          width: 192px;
          height: 48px;
          background: #5832da;
          border-radius: 8px;
          border: none;
          color: red;
          -webkit-transition: 0.5s;
          &:hover {
            -webkit-transform: translateY(-5px);
            transform: translateY(-5px);
            cursor: pointer;
          }
        } //
      }
    }
    // end of title

    .inner-wrapper {
      padding-right: 64px;
      padding-left: 64px;
      display: grid;
      grid-template-columns: 3fr 1fr;
      gap: 30px;

      /* left section */
      .left-section {
        h6 {
          font-weight: bold;
          font-size: 32px;
          color: #5832da;
        } //
        .pills {
          display: flex;
          gap: 16px;
          margin-bottom: 48px;
        } //

        .desc {
          p {
            font-size: 16px;
            line-height: 180%;
            color: #4d4d4d;
          }
          li {
            font-weight: 600;
            font-size: 16px;
            color: #12355b;
            list-style: inside;
          }
          span {
            font-weight: bold;
            font-size: 20px;
          }
        } //

        .accordion-main {
          background: rgba(238, 234, 251, 0.5);
          border-radius: 8px 12px 12px 8px;
          height: 346px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 20px;
          border-left: 8px solid #5832da;
          margin-bottom: 96px;
        } //

        .accordion__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 40px;
          margin-bottom: 16px;

          h5 {
            font-size: 16px;
            line-height: 120%;
            color: #ada8be;
          } //
          .lesson-info {
            display: flex;
            align-items: baseline;
            gap: 16px;
            .number_of_lessons {
              display: flex;
              align-items: center;
              gap: 10px;
              p {
                font-size: 12px;
                line-height: 120%;
                color: #000000;
              }
            } //
            .duration_for_lesson {
              display: flex;
              align-items: center;
              gap: 10px;
              p {
                font-size: 12px;
                line-height: 120%;
                color: #000000;
              }
            } //
          }
        }
      }
    }
  }

  .similar__course {
    margin-bottom: 64px;
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 32px;
      h6 {
        font-weight: bold;
        font-size: 30px;
        line-height: 120%;
        color: #5832da;
      }
      p {
        font-weight: bold;
        font-size: 16px;
        color: #5832da;
        display: flex;
        align-items: center;
        cursor: pointer;
      }
    }

    .card-section {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
