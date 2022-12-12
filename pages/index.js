import NormalButton from "../src/components/NormalButton";
import TextInput from "../src/components/TextInput";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>

      <NormalButton buttonName="Click me" />

      <TextInput label="Enter name" />
    </div>
  );
}
