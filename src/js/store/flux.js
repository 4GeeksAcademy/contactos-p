const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacto: [
        {
          name: "",
          phone: "",
          email: "",
          address: "",
          id: "",
        },
      ],
      contact: {},
    },

    actions: {
      traerContactos: async () => {
        const response = await fetch(
          "https://playground.4geeks.com/contact/agendas/Edo"
        );
        const data = await response.json();
        setStore({ contacto: data.contacts });
      },

      eliminarContacto: async (id) => {
        const response = await fetch(
          "https://playground.4geeks.com/contact/agendas/Edo/contacts/" + id,
          { method: "DELETE" }
        );
        getActions().traerContactos();
      },

      crearContacto: async (dataToSend) => {
        const response = await fetch(
          "https://playground.4geeks.com/contact/agendas/Edo/contacts",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataToSend),
          }
        );
      },

      editarContacto: async (dataToSend, id) => {
        const response = await fetch(
          "https://playground.4geeks.com/contact/agendas/Edo/contacts/" + id,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataToSend),
          }
        );
        if (response.ok) {
          alert("Contacto actualizado correctamente");
          getActions().traerContactos();
        } else {
          alert("Error al actualizar el contacto");
        }
      },

      saveContact: (contact) => {
        setStore({ contact: contact });
      },

      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
