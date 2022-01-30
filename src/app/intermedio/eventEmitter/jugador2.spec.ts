import { Jugador2 } from './jugador2'

describe('Jugador 2 Emit', () => {
  let jugador: Jugador2

  beforeEach(() => { jugador = new Jugador2() })

  it('Must receive an event when it takes damage', () => {
    let newHp = 0
    jugador.hpChange.subscribe(hp => { newHp = hp })
    jugador.getDamage(1000)
    expect(newHp).toBe(0)
  })

  it('Must receive an event when it takes damage and survive if less than 100', () => {
    let newHp = 0
    jugador.hpChange.subscribe(hp => { newHp = hp })
    jugador.getDamage(10)
    expect(newHp).toBe(90)
  })
})
