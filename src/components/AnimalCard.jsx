import React from 'react';
import { Link } from 'react-router-dom';

export function Foto({ animal }) {
  return (
    <img
      className="animal-photo"
      src={
        animal.foto ||
        animal.fotoUrl ||
        (animal.especie === 'Gato'
          ? './gato.svg'
          : './cao.svg')
      }
      alt={animal.nome}
    />
  );
}

export default function AnimalCard({ animal }) {
  return (
    <article className="animal">

      <Foto animal={animal} />

      <div className="animal-body">

        <h3>{animal.nome}</h3>

        <p><strong>Sexo:</strong> {animal.sexo}</p>

        <p><strong>Idade:</strong> {animal.idade}</p>

        <p><strong>Porte:</strong> {animal.porte}</p>

        <Link
          className="btn outline"
          to={'/animais/' + animal.id}
        >
          Tenho interesse
        </Link>

      </div>

    </article>
  );
}