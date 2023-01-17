import './styles.css';

export type CardProps = { // construir os tipos
  name: string, // informar o que e 
  time: string
}

export function Card(props: CardProps) {
  return (
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}