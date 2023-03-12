function Transfer() {
  return (
    <div className="transfer">
      <div className="transfer__container">
        <h1>Interbank Transfer</h1>
        <form>
          <div className="form__group">
            <input required type="number" />
            <label>Enter account number</label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Transfer;
