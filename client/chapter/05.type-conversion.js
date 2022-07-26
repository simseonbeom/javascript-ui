/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
String(3)

// undefined, null
String(undefined)
String(null)

// boolean

String(true)
String(false)

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed
Number(undeinfed) // NaN

// null
null * 1 // 0

// boolean
true / 1 // 1

// string
Number('') // 0

// numeric string

Number('123'); // 123


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''

Booelan(null) // false
Booelan(undefined) // false
Booelan(0) // false
Booelan(NaN) // false
Booelan('') // false


// 위에 나열한 것 이외의 것들 

true