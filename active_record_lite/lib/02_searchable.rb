require_relative 'db_connection'
require_relative '01_sql_object'

module Searchable
  def where(params)
    cols, vals = params.to_a.transpose
    where_cols = cols.join(' = ? AND ') + ' = ?'
    data = DBConnection.execute(<<-SQL, *vals)
    SELECT
      #{table_name}.*
    FROM
      #{table_name}
    WHERE
      #{where_cols}
    SQL
    data.map { |datum| self.new(datum) }
  end
end

class SQLObject
  extend Searchable
end
