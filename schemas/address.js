export default {
  name: 'address',
  title: 'Address',
  type: 'object',
  fields: [
    {
      name: 'street',
      title: 'Street name, number and unit',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'state',
      title: 'State',
      type: 'string',
      description: 'Please use valid 2-letter state code',
      validation: Rule => {
        return Rule
          .regex(/^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/)
          .error('Please use valid 2-letter state code')
      }
    },
  ],
}
