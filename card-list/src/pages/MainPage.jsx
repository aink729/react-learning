import CardList from "../components/CardList";

export default function MainPage({ openConfirm, openAlert }) {
  return (
    <div>
      <h1>🛍️ 쇼핑몰 메인</h1>
      <CardList openConfirm={openConfirm} openAlert={openAlert} />
    </div>
  );
}
