import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

const Agenda = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col">
          {store.contacto.map((item) => (
            <div className="card w-200" key={item.id}>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Teléfono: {item.phone}</p>
                <p className="card-text">Email: {item.email}</p>
                <p className="card-text">Dirección: {item.address}</p>
              </div>
              <button onClick={() => actions.eliminarContacto(item.id)}>
                Borrar
              </button>
              <button
                onClick={() => {
                  actions.saveContact(item);
                  navigate("/editar");
                }}
              >
                Editar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agenda;
