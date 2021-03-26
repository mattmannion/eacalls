import { VFC } from 'react';

const InputTable: VFC = () => (
  <>
    <form className='input-table'>
      <p className='input-table__notice'>
        all fields with an astrisk(*) are required
      </p>
      <input name='name' placeholder='*Name' className='input-table__name' />
      <input name='email' placeholder='Email' className='input-table__email' />
      <input name='phone' placeholder='*Phone' className='input-table__phone' />
      <input
        name='product'
        placeholder='EA Product'
        className='input-table__product'
      />
      <div className='input-table__reason'>
        <label htmlFor='reason'>*Reason for Call:</label>
        <textarea name='reason'></textarea>
      </div>
      <div className='input-table__part'>
        <label htmlFor='part'>Part? </label>
        <input name='part' type='checkbox' placeholder='Part?' />
      </div>
      <input
        name='tractor'
        placeholder='Tractor'
        className='input-table__tractor'
      />
      <div className='input-table__category'>
        <label htmlFor='category'>*Category:</label>
        <select name='category'>
          <option value='select'>select</option>
          <option value='grapple'>Grapple (Travis-3)</option>
          <option value='general'>General (Rick-0)</option>
          <option value='parts1'>Parts (RickH-0)</option>
          <option value='parts3'>Parts (Jeremy-6)</option>
          <option value='parts2'>Parts (Garret-3)</option>
        </select>
      </div>
      <button className='input-table__btn btn-submit'>Submit</button>
    </form>
  </>
);

export default InputTable;
