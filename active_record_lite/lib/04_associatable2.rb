require_relative '03_associatable'

module Associatable

  def has_one_through(name, through_name, source_name)
    through_options = assoc_options[through_name]

    define_method name do
      source_options = through_options.model_class.assoc_options[source_name]

      through_table = through_options.table_name
      id = send(through_options.foreign_key)

      end_table = source_options.table_name
      model_class = source_options.model_class
      through_foreign_key = source_options.foreign_key

      data = DBConnection.execute(<<-SQL, id)
      SELECT
        #{end_table}.*
      FROM
        #{end_table}
      JOIN
        #{through_table} ON #{through_table}.#{through_foreign_key} = #{end_table}.id
      WHERE
        #{through_table}.id = ?
      SQL

      model_class.new(data.first)
    end
  end
end
