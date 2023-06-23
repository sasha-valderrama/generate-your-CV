import styled from '@emotion/styled';

// export default function Sidebar() {
//   return (
//     <SidebarStyle>
//       <div>Sidebar</div>
//     </SidebarStyle>
//   );
// }

export const Sidebar = styled.aside`
  position: fixed;
  top: 8rem;
  left: ${(props) => (props.left ? '0' : '')};
  right: ${(props) => (props.right ? '0' : '')};
  width: 15rem;
  height: 100%;
  background: ${(props) => (props.right ? '#ffe' : '#025')};
`;
