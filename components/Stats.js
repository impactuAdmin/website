import Help from './Help/Help'

const Stats = () => {
  return (
    <section className="stats-wrapper">
      <div className="stats-content reveal">
        <div className="title">
          <h1>DESDE 2018</h1>
        </div>
        <div className="stats">
          <div className="card one">
            <h1 className="counter" data-target="25">
              25
            </h1>
            <h2>Famílias ajudadas</h2>
          </div>
          <div className="card two">
            <h1 className="counter" data-target="18">
              18
            </h1>
            <h2>Famílias a serem apoiadas</h2>
          </div>
          <div className="card three">
            <h1 className="counter" data-target="8">
              8
            </h1>
            <h2>Casas reabilitadas</h2>
          </div>
        </div>
      </div>
      <Help />
    </section>
  )
}

export default Stats
