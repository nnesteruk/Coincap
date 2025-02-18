import { CryptaData } from 'shared/types/crypta.type';
import { useFormatNumbers } from 'shared/hooks';
import { selectData, selectSuma, useAppSelector } from 'shared/state';
import { ColumType } from 'shared/types';
import { TableComponent } from 'shared/ui/tableComponent';
import './portfolio.scss';
import { IconCros } from './IconCros';

export const Portfolio = () => {
  const { fixed } = useFormatNumbers();
  const data = useAppSelector(selectData);
  const suma = useAppSelector(selectSuma);
  const columns: ColumType<CryptaData>[] = [
    {
      key: 'name',
      label: 'Название ',
      attributes: { align: 'center' },
    },
    {
      key: 'priceUsd',
      label: 'Цена ',
      attributes: { align: 'center' },
      reactNode(value) {
        return fixed(String(value));
      },
    },
    {
      key: 'count',
      label: 'Кол-во ',
      attributes: { align: 'center' },
    },
    {
      key: 'suma',
      label: 'Итого ',
      attributes: { align: 'center' },
      reactNode(value) {
        return `${fixed(String(value))}` + ' $';
      },
    },
    {
      key: 'delete',
      label: '',
      attributes: { align: 'center', className: 'portfolio__button' },
      reactNode(_, row) {
        return <IconCros item={row} />;
      },
    },
  ];
  return (
    <div className="portfolio">
      <h1>Портфель</h1>
      <TableComponent
        columns={columns}
        data={data}
        tableRowBodyClassName="portfolio__body-row"
      />
      <p>
        Итого:{' '}
        <span className="portfolio__suma">
          {suma ? fixed(String(suma)) : 0} $
        </span>
      </p>
    </div>
  );
};
