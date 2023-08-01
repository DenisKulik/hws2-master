import { FC, ChangeEvent } from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage)

    const onChangeCallback = (event: ChangeEvent<unknown>, page: number) => {
        onChange(page, itemsCountForPage)
    }

    const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange(page, Number(event.currentTarget.value))
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                color="primary"
                shape="rounded"
                hideNextButton
                hidePrevButton
                renderItem={(item) => (
                    <PaginationItem
                        {...item}
                        sx={{
                            fontSize: '1.4rem',
                        }}
                    />
                )}
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    { id: 4, value: 4 },
                    { id: 7, value: 7 },
                    { id: 10, value: 10 },
                ]}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
