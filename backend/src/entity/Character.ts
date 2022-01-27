import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

interface PageRank {
    title: string,
    rank: 152
}
@Entity()
export class Character {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    unique: true;

    @Column()
    name: string;

    @Column({
        nullable: true
    })
    house: string;

    @Column({
        nullable: true
    })
    slug: string;

    @Column({
        nullable: true
    })
    imageLink: string;

    @Column({
        nullable: true
    })
    gender: string;

    @Column({
        nullable: true
    })
    books: string;

    @Column({
        nullable: true
    })
    rank: number;

    @Column({
        nullable: true
    })

    titles: string;

    @Column({
        type: 'jsonb',
        default: () => "'[]'",
        nullable: true,
    })
    pagerank: PageRank;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updatedAt: Date;
}
