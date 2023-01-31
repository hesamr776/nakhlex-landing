export const DashLine = ({ noMargin }: { noMargin?: boolean }) => {
  return (
    <hr
      style={{
        flex: 1,
        marginLeft: noMargin ? 0 : 12,
        marginRight: noMargin ? 0 : 12,
        borderTopStyle: 'dashed',
        borderColor: 'lightGray',
        borderWidth: 1,
        background: 'transparent',
      }}
    ></hr>
  );
};
