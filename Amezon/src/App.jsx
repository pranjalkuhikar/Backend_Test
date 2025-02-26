// import AmazonAPI from "./Components/AmazonAPI";
import Text from "./Components/Text";

const App = () => {
  return (
    <div className="h-screen w-full bg-zinc-400">
      {/* <AmazonAPI /> */}
      <Text
        text={`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.`}
        highlightWords={["React", "Bits", "animated", "components", "simplify"]}
        highlightClass="highlighted"
        trigger="hover"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.56}
        fontSize="2rem"
        mouseConstraintStiffness={0.9}
      />
    </div>
  );
};

export default App;
