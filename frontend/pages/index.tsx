import { NextPage } from "next";
import { Observer } from "mobx-react-lite/";
import { PageController, PageModel } from "../store/pageController";
import { useState } from "react";

const Index: NextPage<{ model: PageModel }> = props => {
  const [controller] = useState(new PageController(props.model));
  return (
    <div>
      <button
        onClick={() => {
          controller.fetchHello();
        }}
      >
        へろー
      </button>
      <button
        onClick={() => {
          controller.fetchKani();
        }}
      >
        カニ
      </button>
      <Observer>{() => <p>{controller.text}</p>}</Observer>
    </div>
  );
};

Index.getInitialProps = async () => {
  const controller = new PageController();
  await controller.fetchKaniSay();
  return { model: controller };
};

export default Index;
