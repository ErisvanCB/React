import "./Baseboard.css";

function Baseboard({ item1, item2, item3, item4, item5, item6, item7 }) {
  return (
    <div className="baseboard">
      <div class="baseboard">
        <div class="content">
          {/* Parceiros */}
          <h3>{item1}</h3>

          <div class="list">
            <div>
              {/* Senac */}
              {item3}
            </div>

            <div>
              {/* Sebrae */}
              {item4}
            </div>

            <div>
              {/* Senai */}
              {item5}
            </div>
          </div>
        </div>

        <div class="content">
          {/* Outros serviços */}
          <h3>{item2}</h3>

          <div class="list">
            <div>
              {/* UI/UX Design */}
              {item6}
            </div>

            <div>
              {/* CiberSegurança */}
              {item7}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Baseboard;
